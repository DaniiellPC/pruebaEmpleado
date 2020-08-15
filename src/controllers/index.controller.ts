import {Request, Response} from 'express'
import {QueryResult} from 'pg'

import { pool } from '../database'

export const getEmployees = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query('SELECT * FROM employee')
        return res.status(200).json(response.rows)
    } catch (error) {
        console.log(error)
        return res.status(500).json('Internal Server error')
    }
}

export const getEmployeeById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id)
        const response: QueryResult = await pool.query('SELECT * FROM employee WHERE id = $1', [id])
        return res.status(200).json(response.rows)
    } catch (error) {
        console.log(error)
        return res.status(500).json('Internal Server error')
    }
    }

export const createEmployee = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { fullname, funcion } = req.body
        const response: QueryResult = await pool.query('INSERT INTO employee (fullname, funcion) VALUES ($1, $2)', [fullname, funcion])
        return res.json({
            message: 'Usuario creado exitosamente',
            body: {
                fullname,
                funcion
            }
        })
        return res.status(200).json(response.rows)
    } catch (error) {
        console.log(error)
        return res.status(500).json('Internal Server error')
    }
}

export const updateEmployee = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id)
        const { fullname, funcion } = req.body
        const response: QueryResult = await pool.query('UPDATE employee SET fullname = $1, funcion = $2 WHERE id = $3', [fullname, funcion, id])
        return res.json (`Empleado ${id} actulizado correctamente`)
        return res.status(200).json(response.rows)
    } catch (error) {
        console.log(error)
        return res.status(500).json('Internal Server error')
    }
}

export const deleteEmployee = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id)
        const response: QueryResult = await pool.query('DELETE FROM employee WHERE id = $1', [id])
        return res.json(`Empleado ${id} eliminado exitosamente`)
        return res.status(200).json(response.rows)
    } catch (error) {
        console.log(error)
        return res.status(500).json('Internal Server error')
    }
}