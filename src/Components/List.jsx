function List(props) {
  const createSkillArray = (props) => {
    let skills = [];
    for (let i = 1; i <= 5; i++) {
      skills.push({
        id: i,
        name: props[`name${i}`],
        skillLevel: props[`skillLvl${i}`],
      });
    }
    return skills;
  };

  const skills = createSkillArray(props);
  const highSkillLevels = skills.filter((skill) => skill.skillLevel > 4);

  // // alphabetic order
  // skills.sort((firstItem, secondItem) =>
  //   firstItem.name.localeCompare(secondItem.name)
  // );

  // reverse numerical order (descending)
  skills.sort(
    (firstItem, secondItem) => secondItem.skillLevel - firstItem.skillLevel
  );

  const listItems = skills.map((skills) => (
    <li key={skills.id}>
      {skills.name}: &nbsp; {skills.skillLevel}
    </li>
  ));

  return <ul>{listItems}</ul>;
}

export default List;
