document.addEventListener('DOMContentLoaded', () => {
    const tWriterElement = document.querySelector('.tWriter');
    const firstLineH1Element = tWriterElement.querySelector('h1');
    const secondLineH2Element = tWriterElement.querySelector('.tWriter2 h2');
  
    const firstLineDuration = firstLineH1Element.textContent.length * 100; // Adjust the duration factor as needed
  
    setTimeout(() => {
      firstLineH1Element.classList.add('finished');
      secondLineH2Element.style.opacity = 1;
      setTimeout(() => {
        secondLineH2Element.style.display = 'block';
        secondLineH2Element.classList.add('start-typing');
      }, 1000); 
    }, firstLineDuration);
  });