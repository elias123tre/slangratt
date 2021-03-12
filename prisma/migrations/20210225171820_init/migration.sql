-- CreateTable
CREATE TABLE "Trash" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "item" TEXT NOT NULL,
    "note" TEXT,
    "trashTypeId" INTEGER NOT NULL,
    FOREIGN KEY ("trashTypeId") REFERENCES "TrashType" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TrashType" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "text" TEXT
);
