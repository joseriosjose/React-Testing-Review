import React from 'react';

import Todo from '../components/Todo';

export default {
  title: 'Example/Todo',
  component: Todo,
}; 

const Template = args => <Todo {...args}/>


export const Completado = Template.bind({})
Completado.args={ 
    id: 1,
    title: "Caminar 30 minutos",
    completed: true, 
    textColor:"Black"
}

export const Incompleto = Template.bind({})
Incompleto.args={  
    id: 2,
    title: "Preparar la comida",
    completed: false, 
    textColor:"Black"
}


