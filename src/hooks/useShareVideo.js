import { useToast } from "react-felix-ui";
const useShareVideo = () => {
    const toast = useToast()
    return (id) => {
        const host = window.location.protocol + "//" + window.location.host
        const url = host + "/watch/" + id
        if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
            toast({
                status: "success",
                message: "Link copied to clipboard",
                duration: 2
            })
            return navigator.clipboard.writeText(url);
        }
        return Promise.reject('The Clipboard API is not available.');
    }
}
export default useShareVideo