class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  before_create :ensure_auth_token
  enum role: {guide: 0, tourist: 1}
  has_attached_file :avatar, styles: { xs: '32x32#', sm: '64x64#', md: '128x128#', lg: '256x256#', cover: '100x100#', feature: '300x300#' }
  validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/
  validates_with AttachmentSizeValidator, attributes: :avatar, less_than: 5.megabytes

  def ensure_auth_token
    self.auth_token ||= generate_auth_token
  end

  def name
    self.first_name + ' ' + self.last_name
  end


private
  def generate_auth_token
    loop do
      token = Devise.friendly_token
      break token unless User.where(auth_token: token).first
    end
  end   
end
