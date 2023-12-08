import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const finalSpaceCharacters = [
  {
    id: 'gary',
    name: 'Customer',
  },
  {
    id: 'cato',
    name: 'Staff',
  },
  {
    id: 'kvn',
    name: 'Manager',
  },
  {
    id: 'mooncake',
    name: 'Order Coffee',
  },
  {
    id: 'quinn',
    name: 'Prepare Coffee',
  },
  {
    id: 'coffee',
    name: 'Deliver Coffee',
  },
  {
    id: 'qun',
    name: 'Manager Inventory',
  },
  {
    id: 'quiuhnn',
    name: 'Manage Staff',
  },
];

function DraggableComponent() {
  const [characters, updateCharacters] = useState(finalSpaceCharacters);

  function handleOnDragEnd(result: any) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <div className='m-4'>
      <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6'>Usecase Diagram Components</h2>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='characters'>
          {(provided: any) => (
            <ul
              className='characters'
              {...provided.droppableProps}
              ref={provided.innerRef}>
              {characters.map(({ id, name }, index) => {
                return (
                  <Draggable
                    key={id}
                    draggableId={id}
                    index={index}>
                    {(provided: any) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}>
                        <div className='characters-thumb'></div>
                        <p>{name}</p>
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default DraggableComponent;
