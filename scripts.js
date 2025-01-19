const tabButtons = document.querySelectorAll('.tabs__pills .btn');
const tabContents = document.querySelectorAll('.tabs__panels > div');

if (tabButtons && tabContents) {
  tabButtons.forEach((tabBtn) => {
    tabBtn.addEventListener('click', () => {
      const tabId = tabBtn.getAttribute('data-id');

      tabButtons.forEach((btn) => btn.classList.remove('active'));
      tabBtn.classList.add('active');

      tabContents.forEach((content) => {
        content.classList.remove('active');

        if (content.id === tabId) {
          content.classList.add('active');
        }
      });
    });
  });
}


$( "#bgextend" ).on( "click", function() {
    $( ".bg3box" ).fadeIn( "slow", function() {
      // Animation complete
    });
  });