
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
  const userAnswer = state.userAnswers[currentQuestion.id];
  const isAnswered = !!userAnswer;
  const progress = ((state.currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswerSelect = (option: keyof Question['options']) => {
    if (isAnswered || state.isFinished) return;

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
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
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

  const scoreSummary = useMemo(() => {
    const categories: Record<string, { correct: number, total: number }> = {};
    questions.forEach(q => {
      if (!categories[q.axis]) {
        categories[q.axis] = { correct: 0, total: 0 };
      }
      categories[q.axis].total++;
      if (state.userAnswers[q.id] === q.correctAnswer) {
        categories[q.axis].correct++;
      }
    });
    return categories;
  }, [state.userAnswers]);

  if (state.isFinished) {
    const percentage = (state.score / questions.length) * 100;
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl w-full border border-slate-200">
          <div className="mb-6 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-100 text-indigo-600 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Desempenho Final</h1>
            <p className="text-slate-500">Resultado detalhado das {questions.length} questões do relatório.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center">
              <span className="block text-5xl font-bold text-indigo-600">{state.score}</span>
              <span className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Total de Acertos</span>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center">
              <span className="block text-5xl font-bold text-indigo-600">{percentage.toFixed(0)}%</span>
              <span className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Aproveitamento</span>
            </div>
          </div>

          <div className="mb-8 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Eixos Temáticos</h3>
            <div className="space-y-3">
              {Object.entries(scoreSummary).map(([axis, data]) => {
                const axisPercent = (data.correct / data.total) * 100;
                return (
                  <div key={axis} className="bg-white border border-slate-100 p-4 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-bold text-slate-700">{axis}</span>
                      <span className="text-xs font-bold text-indigo-600">{data.correct} / {data.total}</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-indigo-500 h-full transition-all duration-1000"
                        style={{ width: `${axisPercent}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button 
            onClick={resetQuiz}
            className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
          >
            Refazer Questionário
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 pb-10">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-indigo-600 p-2 rounded-lg shadow-md shadow-indigo-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900 leading-tight">Interactive DB Challenge</h1>
              <p className="text-[10px] md:text-xs text-slate-500 font-medium uppercase tracking-tighter">{currentQuestion.axis}</p>
            </div>
          </div>
          <div className="bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            <span className="text-xs font-bold text-indigo-700">{state.currentQuestionIndex + 1} / {questions.length}</span>
          </div>
        </div>
        <div className="w-full bg-slate-100 h-1.5">
          <div 
            className="bg-indigo-600 h-full transition-all duration-300 ease-out" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      <main className="flex-grow max-w-4xl w-full mx-auto p-4 md:p-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 md:p-10">
            {/* Texto Unificado - Todo em Negrito */}
            <div className="text-lg md:text-xl text-slate-900 font-bold leading-relaxed mb-10">
              {currentQuestion.content}
            </div>

            <div className="space-y-4">
              {(Object.entries(currentQuestion.options) as [keyof Question['options'], string][]).map(([key, value]) => {
                const isSelected = userAnswer === key;
                const isCorrect = currentQuestion.correctAnswer === key;
                
                let buttonStyle = 'border-slate-100 hover:border-slate-300 bg-white hover:bg-slate-50';
                let indicatorStyle = 'bg-slate-100 text-slate-500';

                if (isAnswered) {
                  if (isCorrect) {
                    buttonStyle = 'border-green-500 bg-green-50 shadow-sm ring-1 ring-green-500 ring-opacity-50';
                    indicatorStyle = 'bg-green-500 text-white';
                  } else if (isSelected) {
                    buttonStyle = 'border-red-500 bg-red-50 shadow-sm ring-1 ring-red-500 ring-opacity-50';
                    indicatorStyle = 'bg-red-500 text-white';
                  } else {
                    buttonStyle = 'border-slate-100 bg-white opacity-40 grayscale-[0.5]';
                    indicatorStyle = 'bg-slate-100 text-slate-400';
                  }
                } else if (isSelected) {
                  buttonStyle = 'border-indigo-600 bg-indigo-50';
                  indicatorStyle = 'bg-indigo-600 text-white';
                }

                return (
                  <button
                    key={key}
                    onClick={() => handleAnswerSelect(key)}
                    disabled={isAnswered}
                    className={`w-full text-left p-5 rounded-xl border-2 transition-all flex items-start space-x-4 group relative ${buttonStyle}`}
                  >
                    <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-colors ${indicatorStyle}`}>
                      {isAnswered && isCorrect ? '✓' : isAnswered && isSelected ? '✕' : key}
                    </span>
                    <span className={`text-sm md:text-base font-medium leading-relaxed ${isAnswered && isCorrect ? 'text-green-900' : isAnswered && isSelected ? 'text-red-900' : 'text-slate-700'}`}>
                      {value}
                    </span>
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <div className={`mt-10 p-6 rounded-xl border-2 animate-in fade-in slide-in-from-top-4 duration-500 ${
                userAnswer === currentQuestion.correctAnswer 
                  ? 'bg-green-100 border-green-200' 
                  : 'bg-red-100 border-red-200'
              }`}>
                <div className="flex items-center space-x-2 mb-3">
                  <div className={`p-1 rounded-full ${userAnswer === currentQuestion.correctAnswer ? 'bg-green-600' : 'bg-red-600'}`}>
                    {userAnswer === currentQuestion.correctAnswer ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </div>
                  <span className={`font-black uppercase tracking-tighter text-sm ${
                    userAnswer === currentQuestion.correctAnswer ? 'text-green-700' : 'text-red-700'
                  }`}>
                    {userAnswer === currentQuestion.correctAnswer ? 'Muito bem! Resposta Correta' : 'Feedback Pedagógico'}
                  </span>
                </div>
                <p className={`text-sm md:text-base leading-relaxed font-medium ${
                  userAnswer === currentQuestion.correctAnswer ? 'text-green-800' : 'text-red-800'
                }`}>
                  {currentQuestion.optionExplanations[userAnswer]}
                </p>
                
                {userAnswer !== currentQuestion.correctAnswer && (
                  <div className="mt-4 pt-4 border-t border-red-200">
                    <p className="text-xs font-bold text-red-600 uppercase mb-1">Por que a alternativa correta é a {currentQuestion.correctAnswer}?</p>
                    <p className="text-sm text-red-800 italic">
                      {currentQuestion.optionExplanations[currentQuestion.correctAnswer]}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer Controls */}
          <div className="p-6 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
            <button
              onClick={handlePrevious}
              disabled={state.currentQuestionIndex === 0}
              className={`flex items-center space-x-2 px-4 md:px-6 py-3 rounded-xl font-bold transition-all ${
                state.currentQuestionIndex === 0 
                  ? 'text-slate-300 cursor-not-allowed opacity-0' 
                  : 'text-slate-600 hover:bg-slate-200'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="hidden md:inline">Anterior</span>
            </button>

            <button
              onClick={handleNext}
              disabled={!isAnswered}
              className={`flex items-center space-x-2 px-6 md:px-10 py-3 rounded-xl font-bold transition-all ${
                !isAnswered
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed opacity-50'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200 transform hover:scale-[1.02] active:scale-[0.98]'
              }`}
            >
              <span>{state.currentQuestionIndex === questions.length - 1 ? 'Ver Resultado' : 'Próxima Questão'}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
