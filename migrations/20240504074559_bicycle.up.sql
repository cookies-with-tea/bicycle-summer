BEGIN;

CREATE TABLE IF NOT EXISTS bicycle
(
    uuid         UUID PRIMARY KEY NOT NULL,
    title      TEXT               DEFAULT '',
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

COMMIT;