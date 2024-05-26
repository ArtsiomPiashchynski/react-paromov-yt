import styles from './game.module.css';
import { GameSymbol } from './game-symbol';

export function GameInfo({ isDraw, winnerSymbol, currentStep }) {
  if (isDraw) {
    return <div className={styles['game-info']}>DRAW</div>;
  }

  if (winnerSymbol) {
    return (
      <div className={styles['game-info']}>
        WINNER: <GameSymbol symbol={winnerSymbol ?? currentStep} />
      </div>
    );
  }

  return (
    <div className={styles['game-info']}>
      Turn: <GameSymbol symbol={winnerSymbol ?? currentStep} />
    </div>
  );
}
