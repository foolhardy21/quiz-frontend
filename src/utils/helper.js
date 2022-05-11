export const fetchImage = async (url) => {
    const res = await fetch(url);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    return imageObjectURL
}