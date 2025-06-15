import Dexie from 'dexie'; export const db = new Dexie('brainDumpDB_v2'); db.version(2).stores({ thoughts: '++id, content, category, status, createdAt, isPinned', });
