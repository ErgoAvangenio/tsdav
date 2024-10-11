export enum DAVNamespace {
  CALENDAR_SERVER = 'http://calendarserver.org/ns/',
  CALDAV_APPLE = 'http://apple.com/ns/ical/',
  CALDAV = 'urn:ietf:params:xml:ns:caldav',
  CARDDAV = 'urn:ietf:params:xml:ns:carddav',
  DAV = 'DAV:',
  OWN_CLOUD = 'http://owncloud.org/ns',
}

export const DAVAttributeMap = {
  [DAVNamespace.CALDAV]: 'xmlns:c',
  [DAVNamespace.CARDDAV]: 'xmlns:card',
  [DAVNamespace.CALENDAR_SERVER]: 'xmlns:cs',
  [DAVNamespace.CALDAV_APPLE]: 'xmlns:ca',
  [DAVNamespace.DAV]: 'xmlns:d',
  [DAVNamespace.OWN_CLOUD]: 'xmlns:oc',
};

export enum DAVNamespaceShort {
  CALDAV = 'c',
  CARDDAV = 'card',
  CALENDAR_SERVER = 'cs',
  CALDAV_APPLE = 'ca',
  DAV = 'd',
  OWN_CLOUD = 'oc',
}

export enum ICALObjects {
  VEVENT = 'VEVENT',
  VTODO = 'VTODO',
  VJOURNAL = 'VJOURNAL',
  VFREEBUSY = 'VFREEBUSY',
  VTIMEZONE = 'VTIMEZONE',
  VALARM = 'VALARM',
}
