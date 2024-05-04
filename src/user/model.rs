use chrono::NaiveDateTime;
use serde_derive::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(Deserialize, Debug)]
pub struct CreateUserDTO {
  pub(crate) first_name: Option<String>
}

#[derive(Deserialize, Debug)]
pub struct UpdateUserDTO {
  pub(crate) first_name: Option<String>
}

#[derive(Serialize, Debug, sqlx::FromRow)]
pub struct User {
  id: Uuid,
  first_name: String,
  second_name: String,
  last_name: String,
  phone: String,
  birth_date: NaiveDateTime,
  created_at: NaiveDateTime,
  updated_at: NaiveDateTime,
}
