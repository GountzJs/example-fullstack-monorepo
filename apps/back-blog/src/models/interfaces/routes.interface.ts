import express from 'express';

export interface IRoutes {
  path: string;
  router: express.Router;
}
