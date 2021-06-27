export default function CopyUrl() {
    const urlCopied = navigator.clipboard.writeText(window.location.href)

    return urlCopied, alert("Link da sala foi copiado para área de transferência")
}