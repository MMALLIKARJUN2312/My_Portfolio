import { pool } from "../config/db.js";

export const getProjectsModel = async () => {
    const result = await pool.query("SELECT * FROM projects ORDER_BY created_at DESC");
    return result.rows;
}