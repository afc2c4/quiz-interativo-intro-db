
import React, { useState, useMemo } from 'react';
import { questions } from './data';
import { Question, QuizState } from './types';

const App: React.FC = () => {
  const [state, setState] = useState<QuizState>({
    currentQuestionIndex: 0,
    userAnswers: {},
    isFinished: false,
    score: 0,
  });

  const currentQuestion = questions[state.currentQuestionIndex];
  const progress = ((state.currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswerSelect = (option: keyof Question['options']) => {
    if (state.isFinished) return;

    setState(prev => ({
      ...prev,
      userAnswers: {
        ...prev.userAnswers,
        [currentQuestion.id]: option
      }
    }));
  };

  const handleNext = () => {
    if (state.currentQuestionIndex < questions.length - 1) {
      setState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1
      }));
    } else {
      finishQuiz();
    }
  };

  const handlePrevious = () => {
    if (state.currentQuestionIndex > 0) {
      setState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex - 1
      }));
    }
  };

  const finishQuiz = () => {
    let finalScore = 0;
    questions.forEach(q => {
      if (state.userAnswers[q.id] === q.correctAnswer) {
        finalScore++;
      }
    });
    setState(prev => ({ ...prev, isFinished: true, score: finalScore }));
  };

  const resetQuiz = () => {
    setState({
      currentQuestionIndex: 0,
      userAnswers: {},
      isFinished: false,
      score: 0,
    });
  };

  if (state.isFinished) {
    const percentage = (state.score / questions.length) * 100;
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full text-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-100 text-indigo-600 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Quiz Concluído!</h1>
            <p className="text-slate-500">Confira seu desempenho abaixo.</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <span className="block text-4xl font-bold text-indigo-600">{state.score}</span>
              <span className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Acertos</span>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <span className="block text-4xl font-bold text-indigo-600">{percentage.toFixed(0)}%</span>
              <span className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Aproveitamento</span>
            </div>
          </div>

          <div className="space-y-3">
            <button 
              onClick={resetQuiz}
              className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
            >
              Refazer Quiz
            </button>
            <p className="text-xs text-slate-400">Questionário baseado no Relatório Técnico-Pedagógico de Bancos de Dados.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900 leading-tight">Interactive DB Quiz</h1>
              <p className="text-xs text-slate-500 font-medium">{currentQuestion.axis}</p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-sm font-bold text-indigo-600">{state.currentQuestionIndex + 1} / {questions.length}</span>
          </div>
        </div>
        <div className="w-full bg-slate-100 h-1.5">
          <div 
            className="bg-indigo-600 h-full transition-all duration-500 ease-out" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-4xl w-full mx-auto p-4 md:p-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          {/* Context Section */}
          <div className="p-6 md:p-8 bg-slate-50 border-b border-slate-200">
            <div className="flex items-center space-x-2 text-indigo-600 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs font-bold uppercase tracking-widest">Contexto</span>
            </div>
            <p className="text-slate-600 italic leading-relaxed text-sm md:text-base">
              "{currentQuestion.context}"
            </p>
          </div>

          {/* Statement Section */}
          <div className="p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-8 leading-snug">
              {currentQuestion.statement}
            </h2>

            <div className="space-y-3">
              {(Object.entries(currentQuestion.options) as [keyof Question['options'], string][]).map(([key, value]) => {
                const isSelected = state.userAnswers[currentQuestion.id] === key;
                return (
                  <button
                    key={key}
                    onClick={() => handleAnswerSelect(key)}
                    className={`w-full text-left p-4 md:p-5 rounded-xl border-2 transition-all flex items-start space-x-4 group ${
                      isSelected 
                        ? 'border-indigo-600 bg-indigo-50 shadow-md shadow-indigo-100' 
                        : 'border-slate-100 hover:border-slate-300 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-colors ${
                      isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                    }`}>
                      {key}
                    </span>
                    <span className={`text-sm md:text-base font-medium leading-relaxed ${
                      isSelected ? 'text-indigo-900' : 'text-slate-700'
                    }`}>
                      {value}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Footer Controls */}
          <div className="p-6 border-t border-slate-100 bg-white flex items-center justify-between">
            <button
              onClick={handlePrevious}
              disabled={state.currentQuestionIndex === 0}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-bold transition-all ${
                state.currentQuestionIndex === 0 
                  ? 'text-slate-300 cursor-not-allowed' 
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Anterior</span>
            </button>

            <button
              onClick={handleNext}
              className={`flex items-center space-x-2 px-8 py-3 rounded-xl font-bold transition-all ${
                !state.userAnswers[currentQuestion.id]
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200'
              }`}
            >
              <span>{state.currentQuestionIndex === questions.length - 1 ? 'Finalizar' : 'Próxima'}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
