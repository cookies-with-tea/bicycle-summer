use std::sync::Arc;
use axum::Router;
use axum::routing::{get};
use crate::bicycle::handlers::{get_bicycles};
use crate::AppState;

pub fn create_router(shared_state: Arc<AppState>) -> Router<Arc<AppState>> {
  let mut app = Router::new();

  app = app
      .route("/", get(get_bicycles));

  app
}
