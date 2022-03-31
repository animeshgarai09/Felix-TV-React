
export const videoCountByCategory = (videos, categories) => {
    for (let i = 0; i < categories.length; i++) {
        const videoCount = videos.reduce((prev, current) => {
            return current.category === categories[i].categoryName ? prev + 1 : prev
        }, 0)
        categories[i].videoCount = videoCount
    }
    return categories
}
