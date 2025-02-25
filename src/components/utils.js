export const getElapsedTime = (publishedAt) => {
    const publishedTime = new Date(publishedAt);
    const currentTime = new Date();
    
    const elapsedSeconds = Math.floor((currentTime - publishedTime) / 1000);
  
    if (elapsedSeconds < 60) {
      return `${elapsedSeconds} seconds ago`;
    }
  
    const elapsedMinutes = Math.floor(elapsedSeconds / 60);
    if (elapsedMinutes < 60) {
      return `${elapsedMinutes} minutes ago`;
    }
  
    const elapsedHours = Math.floor(elapsedMinutes / 60);
    if (elapsedHours < 24) {
      return `${elapsedHours} hours ago`;
    }
  
    const elapsedDays = Math.floor(elapsedHours / 24);
    if (elapsedDays < 7) {
      return `${elapsedDays} days ago`;
    }
  
    return publishedTime.toISOString().split('T')[0]; // Return YYYY-MM-DD
  };
  