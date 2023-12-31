import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "./Nav";
import Footer from "../Landing/Footer";
import TalentCard from "./TalentCard";
import { getCategories, getTalents } from "../../actions";
import { FilteredCat } from "../Filter/FilteredCat";
import Form from "../SignIn/FormSI";
import Register from "../Register/Register";
import { SortByPrice } from "../Sort/SortByPrice";
import { Link } from "react-router-dom";
import { filteredCat } from "../../actions";
import { SortByQuali } from "../Sort/SortByQuali";
import Spinner from "../Spinner/Spinner";

export default function Home() {
  let skill = useSelector((state) => state.index.filteredTalents);
  //let skillAprobados = skill.filter(el => el.aprobado === true);
  const cargando = useSelector((state) => state.index.cargando);
  const categories=useSelector((state)=>state.index.categories)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTalents());
    dispatch(getCategories())
  }, [dispatch]);
  const [ventanaLogIn, setVentanaLogIn] = useState(false);
  const [ventanaRegister, setVentanaRegister] = useState(false);

  function onModalClick(e) {
    e.preventDefault();
    setVentanaLogIn(!ventanaLogIn);
  }
  function onModaleClick(e) {
    e.preventDefault();
    setVentanaRegister(!ventanaRegister);
  }
  function onModalChange(e) {
    e.preventDefault();
    setVentanaLogIn(!ventanaLogIn);
    setVentanaRegister(!ventanaRegister);
  }

  function handleCatFilter(e) {
    e.preventDefault();
    console.log(e.target.value)
    dispatch(filteredCat(e.target.value));
  }

  return (
    <div class="user-select-none">
      <Nav
        onModalChange={onModalChange}
        onModaleClick={onModaleClick}
        onModalClick={onModalClick}
      />

      <div>
        {ventanaLogIn ? (
          <Form onModalClick={onModalClick} onModalChange={onModalChange} />
        ) : (
          console.log("ingreso")
        )}
        {ventanaRegister ? (
          <Register
            onModaleClick={onModaleClick}
            onModalChange={onModalChange}
          />
        ) : (
          console.log("registro")
        )}
        {/* <h1 class="text-4xl font-bold m-4">CATEGORIAS</h1>
        <Categories /> <hr /> */}
        {/* <h1 class="text-4xl font-bold m-4">TALENTOS</h1> */}
        {/* <Link to="/messenger">
          <button class="font-semibold bg-light rounded-md w-40 p-1 m-3">
            Chat
          </button>
        </Link> */}
      </div>
      <div className='flex flex-col items-center justify-center w-full space-y-4 mb-6 mt-6'>
            <h2 className='text-3xl font-bold underline underline-offset-4 '>¡Aventurate al desafio de enseñar y aprender nuevos talentos!</h2>
        </div>
      <div class="flex justify-center space-x-10 font-semibold text-xl">
        <div>
          <span>Categorias: </span>
          <select onChange={(e) => handleCatFilter(e)}>
          {categories.map(e=><FilteredCat category={e.title}/>)}
          </select>
        </div>
        <div>
          <SortByPrice />
        </div>
        <div>
          <SortByQuali />
        </div>
      </div>
      {cargando ? (
        <Spinner />
      ) : (
        <div class="flex flex-row flex-wrap items-center content-around justify-around">
          {skill?.length === 0 ? (
            <div class="text-4xl min-h-screen font-bold m-4">
              {" "}
              <h3 class="m-auto">Ups! no encontramos lo que buscas, intenta de nuevo</h3>
            </div>
          ) : (
            skill?.map((talent) => {
              return (
                <TalentCard
                  key={talent.id}
                  category={talent?.category?.title}
                  id={talent.id}
                  username={talent?.user?.username}
                  title={talent.title}
                  description={talent.description}
                  image={talent.image}
                  cost={talent.cost}
                  rating={talent.rating}
                />
              );
            })
          )}
        </div>
      )}
      {/* <h1 class="text-2xl font-bold m-4">CATEGORIAS</h1>
      <Categories /> <hr /> */}
      <Footer />
    </div>
  );
}
