/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import linkedIn from '../../assets/linkedin-icon.svg'
import gitHub from '../../assets/github-icon.svg'
import Footer from '../Landing/Footer'
import { Link } from "react-router-dom";
import Nav from "../Profile/Nav";

export default function AboutUs() {
    let creators = [
        {
            name: "Bautista Pugnaloni",
            Linkedin: "https://www.linkedin.com/in/bpugnaloni-dev/",
            GitHub: "https://github.com/BPugna",
            image: "https://avatars.githubusercontent.com/u/73837548?v=4",
            place: "Argentina"
        },
        {
            name: "Bruno Herrera",
            Linkedin: "https://www.linkedin.com/in/bruno-herrera-aa10b6201/",
            GitHub: "https://github.com/Lambda1158",
            image: "https://avatars.githubusercontent.com/u/80788930?v=4",
            place: "Argentina"
        },
        {
            name: "Federico Ramos",
            Linkedin: "https://www.linkedin.com/in/fede-ramos-fullstack/",
            GitHub: "https://github.com/Fede-Ramos",
            image: "https://avatars.githubusercontent.com/u/87664281?v=4",
            place: "Argentina"
        },
        {
            name: "Franco Oropel",
            Linkedin: "https://www.linkedin.com/in/franco-oropel/",
            GitHub: "https://github.com/F-ranco",
            image: "https://avatars.githubusercontent.com/u/87246426?v=4",
            place: "Argentina"
        },
        {
            name:"Julian Renteria",
            Linkedin: "https://www.linkedin.com/in/imakheri/",
            GitHub: "https://github.com/Imakheri",
            image: "https://avatars.githubusercontent.com/u/78008281?v=4",
            place: "Mexico"
        },
        {
            name:"Santiago Carrizo",
            Linkedin: "https://www.linkedin.com/in/santiago-carrizo/",
            GitHub: "https://github.com/zantica",
            image: "https://avatars.githubusercontent.com/u/86508785?v=4",
            place: "Argentina"
        }
    ]
    return (
        <div class="bg-semilight">
            <Nav/>
            <h1 class="flex justify-center font-semibold text-4xl text-dark m-4">Quienes somos?</h1>
            <p class="text-lg m-3">Estudiantes prontos a terminar el bootcamp de Soy Henry, del cual adquirimos las habilidades necesarias para realizar este proyecto grupal, aplicando todos los conocimientos y mas.</p>
            <div class="grid grid-cols-3 m-10 bg-light rounded-md">
                {creators.map((creator) =>
                <div class="flex flex-col items-center m-3 border-2 rounded-md border-dark p-3 hover:bg-semidark transition ease-in-out">
                    <img class="w-20 rounded-full" src={creator.image} alt="" />
                    <h3 class="font-bold">{creator.name}</h3>
                    <h4 class="font-semibold m-2">{creator.place}</h4>
                    <div class="flex flex-row m-2">
                    <a class="text-dark font-medium" href={creator.Linkedin} target="_blank"><img class="w-12 m-2" src={linkedIn} alt="logo-linkedin" /></a>
                    <a class="text-dark font-medium" href={creator.GitHub} target="_blank"><img class="w-12 m-2" src={gitHub} alt="gitHub-logo" /></a>
                    </div>
                </div>
                )}
            </div>
            <div class="flex justify-center">
                    <Link to='/'>
                    <button class="flex justify-center m-4 bg-dark rounded-lg text-lg text-white w-96">Volver</button>
                    </Link>
            </div>
        <Footer/>
        </div>
    )
}