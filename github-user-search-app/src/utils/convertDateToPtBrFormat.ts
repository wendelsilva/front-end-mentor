export function convertDateToPtBrFormat(date: string) {
    const splitDate = date.toString().split('T')[0];
    const day = splitDate.split('-')[2]
    const month = splitDate.split('-')[1];
    const year = splitDate.split('-')[0];
    const dateFormated = day + '/' + month + '/' + year;

    return dateFormated
}