pub mod db;
pub mod app;
pub mod error;

use std::sync::Arc;
pub use db::DatabaseConfig;

use crate::user::{routing as user_routing};
use crate::bicycle::{routing as bicycle_routing};
use axum::Router;
use crate::AppState;

pub fn create_routing(shared_state: Arc<AppState>) ->  Router<Arc<AppState>> {
  let mut app = Router::new();

  app = Router::new()
    .nest("/api/v1/users", user_routing::create_router(shared_state.clone()))
    .nest("/api/v1/bicycles", bicycle_routing::create_router(shared_state.clone()));

  app
}
