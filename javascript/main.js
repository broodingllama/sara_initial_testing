// //manual click tracking
// function trackClick(linkName) {
//   console.log("User clicked on: " + linkName);
//   // If using Google Analytics, you can also log an event:
//   gtag('event', 'click_link', {
//     'event_category': 'navigation',
//     'event_label': linkName
//   });
// }

// // Track CTA (Call To Action) button clicks
// function trackCTA(buttonName) {
//   console.log("CTA button clicked: " + buttonName);
//   gtag('event', 'cta_click', {
//     'event_category': 'button',
//     'event_label': buttonName
//   });
// }

function trackPlanClick(planName) {
  gtag('event', 'select_plan', {
    'event_category': 'plans',
    'event_label': planName
    // optionally more parameters
  });
}
