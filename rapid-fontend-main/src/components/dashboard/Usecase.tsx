import React, { useState } from 'react';
import UmlViewer from '../ui/UmlViewer';

type Props = {};

function Usecase({}: Props) {
  const [usecases, setUsecases] = useState([
    { actor: 'User', usecase: 'place order', label: 'user place order' },
    { actor: 'Manager', usecase: 'accept order', label: 'Hey' },
  ]);
  const [umlCode, setUmlCode] = useState(`
        Tutor --> (Conduct Tutoring Session): session
        Tutor --> (Prepare Learning Material)
        Tutor --> (Evaluate Student Performance)

        Student --> (Attend Tutoring Session)
        Student --> (Complete Assignments)
        Student --> (Ask Questions)

        Parent --> (Enroll Kid in Tutoring)
        Parent --> (Provide Feedback)
        Parent --> (Monitor Performance Reports)
        Parent --> (Evaluate Student Performance)
        Parent --> (Ask Questions)`);

  const [actor, setActor] = useState('');
  const [task, setTask] = useState('');
  const [label, setLabel] = useState('');
  const [generated, setGenerated] = useState(``);

  const removeUsecase = (index: any) => {
    setUsecases((prevUsecases) => prevUsecases.filter((usecase, i) => i !== index));
  };

  const extractUsecases = () => {
    const lines = umlCode.split('\n').filter((line) => line.trim().length > 0);
    const usecases = lines.map((line) => {
      const [actorPart, usecasePart] = line.split('-->');
      const actor = actorPart.trim();
      const [usecase, label = ''] = usecasePart.split(':').map((s) => s.trim());

      return { actor, usecase, label };
    });

    console.log(usecases);
    // do something with usecases array
  };

  const removeDuplicates = (array: any) => {
    const seen = new Map();
    return array.filter((item: any) => {
      const key = `${item.actor}:${item.usecase}`;
      const duplicate = seen.has(key);
      if (!duplicate) seen.set(key, true);
      return !duplicate;
    });
  };

  const addUmlCode = (newLine: any) => {
    setGenerated((prevUmlCode) => `${prevUmlCode}\n\n${newLine}`);
  };

  const addUsecase = () => {
    const newUsecase = { actor: actor, usecase: task, label: label }; // Replace with the actual new usecase
    setUsecases((prevUsecases) => [...prevUsecases, newUsecase]);

    setActor('');
    setTask('');
    setLabel('');
  };

  const generateCode = () => {
    const newArr = removeDuplicates(usecases);
    for (let index = 0; index < newArr.length; index++) {
      const element = newArr[index];

      addUmlCode(`${element.actor} --> (${element.usecase}) : ${element.label}`);
    }
  };

  return (
    <div className='grid grid-cols-2 gap-12'>
      <div>
        <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6'></h2>
        <div className='join mb-5'>
          <div>
            <div className='grid grid-cols-3'>
              <input
                className='input input-bordered join-item'
                placeholder='Actor'
                value={actor}
                onChange={(e) => setActor(e.target.value)}
              />
              <input
                className='input input-bordered join-item'
                placeholder='Usecase'
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
              <input
                className='input input-bordered join-item'
                placeholder='Label'
                value={label}
                onChange={(e) => setLabel(e.target.value)}
              />
            </div>
          </div>
          <div className='indicator'>
            <button
              className='btn join-item'
              onClick={addUsecase}>
              ADD USECASE
            </button>
          </div>
        </div>

        <ul
          id='myUL'
          className='mb-4'>
          {usecases.map((usecase, index) => {
            return (
              <li
                key={index}
                className='bg-base-200 rounded-lg h-12 p-4 justify-center text-black mb-2'>
                {usecase.actor} {'-->'} ({usecase.usecase}) : {usecase.label}
              </li>
            );
          })}
        </ul>
        <button
          className='btn join-item'
          onClick={generateCode}>
          GENERATE
        </button>
      </div>

      <UmlViewer code={generated} />
    </div>
  );
}
export default Usecase;
