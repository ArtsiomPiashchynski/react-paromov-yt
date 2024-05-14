import { useState } from "react";
import { SYMBOL_X, SYMBOL_O } from "./constants";

const hasEmptyCells = (cells) => {
  return cells.some((cell) => !Boolean(cell));
}

const computeWinner = (cells) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (
      cells[a] &&
      cells[a] === cells[b] &&
      cells[a] === cells[c]
    ) {
      return [a, b, c];
    }
  }
}

export function useGameState() {
  const [cells, setSells] = useState([null, null, null, null, null, null, null, null, null]);
  const [currentStep, setCurrentStep] = useState(SYMBOL_X);
  const [winnerSequence, setWinnerSequence] = useState();
  const [isDraw, setIsDraw] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);

  const swapCurrentStep = (currentStep) => currentStep === SYMBOL_X ? setCurrentStep(SYMBOL_O) : setCurrentStep(SYMBOL_X);

  const handleCellClick = (index) => {
    if (cells[index] || winnerSequence) return;

    const cellsCopy = cells.slice();
    cellsCopy[index] = currentStep;

    const winner = computeWinner(cellsCopy);
    setSells(cellsCopy);

    setIsDraw(!hasEmptyCells(cellsCopy) && !winner);

    swapCurrentStep(currentStep);
    setIsGameStarted(true);
    setWinnerSequence(winner);
  }

  const handleResetClick = () => {
    setSells(Array.from({length: 9}, () => null));
    setWinnerSequence();
    setCurrentStep(SYMBOL_X);
    setIsDraw(false);
    setIsGameStarted(false);
  }

  const handleSwapClick = () => {
    if (!isGameStarted) {
      swapCurrentStep(currentStep);
    }
  }

  const winnerSymbol = winnerSequence ? cells[winnerSequence[0]] : undefined;

  return {
    cells,
    currentStep,
    winnerSequence,
    winnerSymbol,
    isDraw,
    isGameStarted,
    handleSwapClick,
    handleCellClick,
    handleResetClick
  }
}
