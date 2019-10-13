# == Schema Information
#
# Table name: time_slots
#
#  id         :bigint           not null, primary key
#  start_time :datetime         not null
#  end_time   :datetime         not null
#  teacher_id :integer          not null
#  available  :boolean          default(TRUE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class TimeSlot < ApplicationRecord
  validates :teacher_id, presence: :true

  belongs_to :teacher, 
    primary_key: :id,
    foreign_key: :teacher_id,
    class_name: "Teacher"

  has_many :bookings,
    primary_key: :id,
    foreign_key: :time_slot_id,
    class_name: 'Booking'


end