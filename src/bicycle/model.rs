use chrono::NaiveDateTime;
use serde_derive::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(Serialize, Debug, sqlx::FromRow)]
pub struct Bicycle {
  id: Uuid,
  title: String,
  created_at: NaiveDateTime,
  updated_at: NaiveDateTime,
}
