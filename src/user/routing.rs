use std::sync::Arc;
use axum::Router;
use axum::routing::{get, post};
use crate::user::handlers::{create_user, get_users};
use crate::AppState;

pub fn create_router(shared_state: Arc<AppState>) -> Router<Arc<AppState>> {
  let mut app = Router::new();

  app = app
      .route("/", post({
        let shared_state = shared_state.clone();
        move |body| create_user(body, shared_state.clone())
      }))
      .route("/", get(get_users));

  app
}
