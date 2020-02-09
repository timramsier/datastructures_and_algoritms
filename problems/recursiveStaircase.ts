class StairCase {
  private totalSteps: number;
  private actions: number[];
  constructor(totalSteps: number, actions: number[]) {
    this.totalSteps = totalSteps;
    this.actions = actions;
  }
  public getPossibilities(): number {
    const _calculate = (index: number): number => {
      if (index > this.totalSteps) return 0;
      if (index === this.totalSteps) return 1;
      return this.actions
        .map((distance: number): number | undefined =>
          _calculate(distance + index)
        )
        .reduce((a, c) => (a += c), 0);
    };
    return _calculate(0);
  }
}

export default StairCase;
