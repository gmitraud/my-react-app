function List(props) {
  const createSkillArray = (props) => {
    let skills = [];
    for (let i = 1; i <= 5; i++) {
      skills.push({
        id: i,
        name: props[`name${i}`] || `Skill Name${i}`,
        skillLevel: props[`skillLvl${i}`] || `Skill Level${i}`,
      });
    }
    return skills;
  };

  const skills = createSkillArray(props);

  skills.sort(
    (firstItem, secondItem) => secondItem.skillLevel - firstItem.skillLevel
  );

  const listTitle = props.listTitle;

  const listItems = skills.map((skills) => (
    <li key={skills.id}>
      {skills.name}: &nbsp; {skills.skillLevel}
    </li>
  ));

  return (
    listItems.length > 4 && (
      <>
        <h3 className="list-title">{listTitle}</h3>
        <ul className="list-items">{listItems}</ul>
      </>
    )
  );
}

export default List;
