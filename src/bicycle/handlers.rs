use std::sync::Arc;
use axum::http::StatusCode;
use axum::{extract, Json};
use crate::AppState;
use crate::bicycle::model::Bicycle;
use crate::core::error::internal_error;


pub(crate) async fn get_bicycles(
  state: extract::State<Arc<AppState>>,
) -> Result<Json<Vec<Bicycle>>, (StatusCode, String)> {
  let bicycles = sqlx::query_as::<_, Bicycle>("SELECT * FROM bicycle")
    .fetch_all(&state.pool)
    .await
    .map_err(internal_error)?;

  Ok(Json(bicycles))
}

