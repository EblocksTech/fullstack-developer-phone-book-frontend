import { createSelector } from 'reselect';

const selectNotifications = state => state.notification;

export const selectItems = createSelector([selectNotifications], notifications => notifications.items);