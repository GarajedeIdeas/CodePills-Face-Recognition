const MODEL_URL = '/public/models';

(async () => {
    await faceapi.loadSsdMobilenetv1Model(MODEL_URL)
    await faceapi.loadFaceLandmarkModel(MODEL_URL)
    await faceapi.loadFaceRecognitionModel(MODEL_URL)
    await faceapi.loadFaceExpressionModel(MODEL_URL)

    const image = document.getElementById('image');
    const canvas = document.getElementById('canvas');

    let fullFaceDescriptions = await faceapi.detectAllFaces(image)
        .withFaceLandmarks()
        .withFaceDescriptors()
        .withFaceExpressions();

    faceapi.draw.drawDetections(canvas, fullFaceDescriptions);
    faceapi.draw.drawFaceLandmarks(canvas, fullFaceDescriptions);
    faceapi.draw.drawFaceExpressions(canvas, fullFaceDescriptions, 0.05);

})();