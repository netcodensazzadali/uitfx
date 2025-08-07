let fbqFired = new Set();

export const trackPixel = (eventName, payload = {}, options = {}) => {
  const { throttle = true, id = null } = options;

  // Generate a unique key per event + payload
  const eventKey = id || `${eventName}-${JSON.stringify(payload)}`;

  if (typeof window.fbq === "undefined") return;

  if (throttle && fbqFired.has(eventKey)) return;

  // Track event
  if (Object.keys(payload).length > 0) {
    window.fbq("trackCustom", eventName, payload);
  } else {
    window.fbq("track", eventName);
  }

  if (throttle) {
    fbqFired.add(eventKey);
    setTimeout(() => fbqFired.delete(eventKey), 1000); // cooldown to prevent rapid repeats
  }
};
