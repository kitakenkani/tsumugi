export default function formatDate(date) {
    const [year, month, day] = date.split("T")[0].split("-");
    return `${year}年${month}月${day}日`;
}