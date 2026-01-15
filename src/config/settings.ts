/**
 * Settings Configuration
 * This file controls feature visibility and layout behavior
 */

export const settings = {
  // Show/hide GitHub activity card
  showGithub: false,
  
  // When GitHub is hidden, LeetCode will expand to fill the space
  // This is automatically handled by the layout
} as const;

export type Settings = typeof settings;
