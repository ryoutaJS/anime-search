export function useSeasonData() {
  const date = new Date()

  const getYears = (): string[] => {
    const startYear = 2018
    const nextYear = date.getFullYear() + 1
    const years = []

    for (let year = startYear; year <= nextYear; year++) {
      years.push(year.toString())
    }

    return years
  }

  const getCurrentYear = (): string => {
    return date.getFullYear().toString()
  }

  const getCurrentSeason = (): string => {
    const month = date.getMonth() + 1

    switch (month) {
      case 4:
      case 5:
      case 6:
        return 'spring'
      case 7:
      case 8:
      case 9:
        return 'summer'
      case 10:
      case 11:
      case 12:
        return 'autumn'
      case 1:
      case 2:
      case 3:
        return 'winter'
      default:
        throw new Error('month is invalid')
    }
  }

  const convertSeasonName = (seasonName: string | null) => {
    switch (seasonName) {
      case 'SPRING':
        return '春'
      case 'SUMMER':
        return '夏'
      case 'AUTUMN':
        return '秋'
      case 'WINTER':
        return '冬'
      default:
        return seasonName
    }
  }

  return {
    years: getYears(),
    currentYear: getCurrentYear(),
    currentSeason: getCurrentSeason(),
    convertSeasonName,
  }
}
