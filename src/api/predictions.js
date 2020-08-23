import { Predictions } from 'aws-amplify';

export const getLabelsFromImage = async(file) => {
    const predictions = await Predictions.identify({
        labels: {
            source: {
                file,
            },
            type: "ALL"
        }
    })

    return predictions.labels.map(item => {
        return item.name
    })
}
