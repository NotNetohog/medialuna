
export function formatDate(date, dateStyle = 'full', locales = 'es') {
    const formatter = new Intl.DateTimeFormat(locales, { dateStyle })
    return formatter.format(new Date(date))
}
