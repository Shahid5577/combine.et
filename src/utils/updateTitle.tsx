export const updateTab = (newTitle: string, newIconUrl: string): void => {
    document.title = newTitle;
    const favicon = document.getElementById('favicon') as HTMLImageElement; 
    if (favicon) {
        favicon.src = newIconUrl;
    }
}