
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from '../containers/Home'
import { Countries } from '../containers/Countries'

export const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route element={<Home/>} path="/" exact />
            <Route element={<Countries/>} path="/paises" exact />
        </Routes>
        </BrowserRouter>
    )
}