/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import plantumlEncoder from 'plantuml-encoder';

function UmlViewer({ code }: any) {
  const uml = `
 @startuml
 !theme crt-amber
 left to right direction
        ${code}
        @enduml

  `;
  const encodedUml = plantumlEncoder.encode(uml);
  const src = `http://www.plantuml.com/plantuml/png/${encodedUml}`;
  return (
    <div className=''>
      <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6'></h2>
      <img
        src={src}
        alt='UML Diagram'
      />
    </div>
  );
}

export default UmlViewer;
