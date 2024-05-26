import styles from './game.module.css';
import { GameInfo } from './game-info';
import { GameSell } from './game-sell';
import { useGameState } from './use-game-state';

export function Game() {
  const {
    cells,
    currentStep,
    winnerSequence,
    winnerSymbol,
    isDraw,
    isGameStarted,
    handleSwapClick,
    handleCellClick,
    handleResetClick,
  } = useGameState();

  return (
    <div className={styles['game']}>
      <GameInfo
        isDraw={isDraw}
        winnerSymbol={winnerSymbol}
        currentStep={currentStep}
      />

      <div className={styles['game-field']}>
        {cells.map((symbol, index) => (
          <GameSell
            key={index}
            symbol={symbol}
            isWinner={winnerSequence?.includes(index)}
            onClick={() => handleCellClick(index)}
          />
        ))}
      </div>

      <div className={styles['game-controls']}>
        <button className={styles['game-control']} onClick={handleResetClick}>
          Reset
        </button>

        <button
          className={styles['game-control']}
          disabled={isGameStarted}
          onClick={handleSwapClick}
        >
          Swap
        </button>
      </div>
    </div>
  );
}
