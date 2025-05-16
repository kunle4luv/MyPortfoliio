/**
 * @copyright 2025 coding_with_AyoKunle
 * @license Apache-2.0
 */


/**
 * Node Modules
 */
import PropTypes from "prop-types";


const SkillCard = ({ imgSrc, label, desc, classes }) => {
  return (
    <div className={'flex items-center gap-3 ring-2 ring-inset rounded-2xl p-3 hover:bg-sky-300 transition-colors group' + classes}>
      <figure className="bg-sky-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-sky-900 transition-colors">
        <img src={imgSrc} alt={label} width={32} height={32} className="" />
      </figure>

      <div>
        <h3 className="">{label}</h3>

        <p className="text-purple-400 text-sm">{desc}</p>
      </div>

    </div>
  )
}

SkillCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    classes: PropTypes.string,
}

export default SkillCard
