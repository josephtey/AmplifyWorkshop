import React, { useState } from 'react'
import mic from 'microphone-stream';
import { Button } from '@material-ui/core';


function AudioRecorder(props) {
    const [recording, setRecording] = useState(false);
    const [micStream, setMicStream] = useState();
    const [audioBuffer] = useState(
        (function() {
            let buffer = [];

            function add(raw) {
                buffer = buffer.concat(...raw);
                return buffer;
            }

            function newBuffer() {
                console.log("resetting buffer");
                buffer = [];
            }

            return {
                reset: function() {
                    newBuffer();
                },
                addData: function(raw) {
                    return add(raw);
                },
                getData: function() {
                    return buffer;
                }
            };
        })()
    );

    async function startRecording() {
        console.log('start recording');
        audioBuffer.reset();

        window.navigator.mediaDevices.getUserMedia({ video: false, audio: true }).then((stream) => {
            const startMic = new mic();

            startMic.setStream(stream);
            startMic.on('data', (chunk) => {
                var raw = mic.toRaw(chunk);
                if (raw == null) {
                    return;
                }
                audioBuffer.addData(raw);

            });

            setRecording(true);
            setMicStream(startMic);
        });
    }

    async function stopRecording() {
        console.log('stop recording');
        const { finishRecording } = props;

        micStream.stop();
        setMicStream(null);
        setRecording(false);

        const resultBuffer = audioBuffer.getData();

        if (typeof finishRecording === "function") {
            finishRecording(resultBuffer);
        }

    }

    return (
        <div className="audioRecorder">
        <div>
          {recording && <Button variant="contained"  onClick={stopRecording}>Stop</Button>}
          {!recording && <Button variant="contained" onClick={startRecording}>Voice</Button>}
        </div>
      </div>
    );
}

export default AudioRecorder
