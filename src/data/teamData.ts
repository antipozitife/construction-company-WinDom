import Zaharov from '../../img/Zaharov.jpg';
import Nazipova from '../../img/Nazipova.svg';
import Muharyamov from '../../img/Muharyamov.jpg';
import Vaganov from '../../img/Vaganov.jpg';
import Davidova from '../../img/Davidova.jpg';
import Kabakov from '../../img/Kabakov.jpg';
import Sergeeva from '../../img/Cergeeva.jpg';
import Smirnov from '../../img/Smirnov.jpg';
import Ivanov from '../../img/Ivanov.jpg';
import Fedotova from '../../img/Fedotova.jpg';
import Kuzin from '../../img/Kuzin.jpg';
import Elistrtov from '../../img/Elistratov.jpg';
import Salyahiev from '../../img/Salyahiev.jpg';


interface TeamData {
    name: string;
    title: string;
    image: string;
}

export const teamData: TeamData[] = [
    {
        name: 'Игорь Захаров',
        title: 'Руководитель проекта',
        image: Zaharov,
    },

    {
        name: 'Луиза Назипова',
        title: 'Главный архитектор',
        image: Nazipova,
    },

    {
        name: 'Мухарямов Расул',
        title: 'Заместитель руководителя проекта',
        image: Muharyamov,
    },

    {
        name: 'Ваганов Дмитрий',
        title: 'Заместитель руководителя проекта',
        image: Vaganov,
    },

    {
        name: 'Анфиса Давыдова',
        title: 'Руководитель отдела маркетинга',
        image: Davidova,
    },

    {
        name: 'Евгений Кабаков',
        title: 'Руководитель отдела продаж',
        image: Kabakov,
    },

    {
        name: 'Эльвира Сергеева',
        title: 'Руководитель отдела ипотеки',
        image: Sergeeva,
    },

    {
        name: 'Игорь Смирнов',
        title: 'Менеджер по сопровождению',
        image: Smirnov,
    },

    {
        name: 'Иван Иванов',
        title: 'Менеджер по сопровождению',
        image: Ivanov,
    },

    {
        name: 'Лариса Федотова',
        title: 'Ведущий Юрисконсульт',
        image: Fedotova,
    },

    {
        name: 'Алексей Кузин',
        title: 'Начальник участка',
        image: Kuzin,
    },

    {
        name: 'Николай Елистратов',
        title: 'Прораб',
        image: Elistrtov,
    },

    {
        name: 'Фаниль Саляхиев',
        title: 'Прораб',
        image: Salyahiev,
    },
];
