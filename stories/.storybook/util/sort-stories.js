function position(item, array = []) {
  const index = array.indexOf(item)
  // Show unsorted items at the bottom.
  return index === -1 ? 10000 : index
}

function splitStoryName(name) {
  return name.split('/')
}

function sortStories(sortOrder) {
  const groups = Object.keys(sortOrder)

  return (a, b) => {
    const aKind = a[1].kind
    const bKind = b[1].kind
    const [aGroup, aComponent] = splitStoryName(aKind)
    const [bGroup, bComponent] = splitStoryName(bKind)

    // Preserve story sort order.
    if (aKind === bKind) {
      return 0
    }

    // Sort stories in a group.
    if (aGroup === bGroup) {
      const group = sortOrder[aGroup]

      return position(aComponent, group) - position(bComponent, group)
    }

    // Sort groups.
    return position(aGroup, groups) - position(bGroup, groups)
  }
}

export default sortStories
