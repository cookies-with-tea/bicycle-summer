use std::sync::Arc;
use axum::extract::{Path};
use axum::http::StatusCode;
use axum::{extract, Json};
use crate::user::model::{User, CreateUserDTO, UpdateUserDTO};
use crate::AppState;
use crate::core::error::internal_error;

pub(crate) async fn create_user(
  Json(payload): Json<CreateUserDTO>,
  state: Arc<AppState>,
) -> StatusCode {
  let _ = sqlx::query(
    "INSERT INTO user (first_name) VALUES ($1)"
  )
    .bind(&payload.first_name)
    .execute(&state.pool)
    .await
    .map_err(internal_error)
    .unwrap();

  StatusCode::CREATED
}

pub(crate) async fn get_users(
  state: extract::State<Arc<AppState>>,
) -> Result<Json<Vec<User>>, (StatusCode, String)> {
  let todos = sqlx::query_as::<_, User>("SELECT * FROM bicycle_user")
    .fetch_all(&state.pool)
    .await
    .map_err(internal_error)?;

  Ok(Json(todos))
}

async fn get_user(
  Path(id): Path<i32>,
  state: Arc<AppState>,
) -> Result<Json<User>, (StatusCode, String)> {
  let result = sqlx::query_as::<_, User>("SELECT * FROM user WHERE id = $1")
    .bind(id)
    .fetch_optional(&state.pool)
    .await
    .map_err(|error| (StatusCode::INTERNAL_SERVER_ERROR, error.to_string()))?;

  match result {
    Some(todo) => {
      println!("{:?}", todo);
      Ok(Json(todo))
    },
    None => Err((StatusCode::NOT_FOUND, "Аниме не найдено".to_string())),
  }
}

async fn delete_anime(
  Path(id): Path<i32>,
  state: Arc<AppState>,
) -> StatusCode {
  let _ = sqlx::query("DELETE FROM user WHERE id = $1")
    .bind(id)
    .execute(&state.pool)
    .await
    .map_err(internal_error)
    .unwrap();

  StatusCode::OK
}
