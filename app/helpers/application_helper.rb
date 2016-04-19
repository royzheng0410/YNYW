module ApplicationHelper
  def flash_tag
    return '' if flash.blank?
    html = ''
    flash.each do |name, msg|
      flash_type = case name
      when :alert, :error
        'alert'
      when :notice, :success
        'success'
      else
        name
      end
      if msg.is_a?(String)
        html << "<div id='global-alert' data-alert class='alert-box #{flash_type}'>"
        html << "#{msg}"
        html << "<button href='#' tabindex='0' class='close' aria-label='Close Alert'>&times;</button>"
        html << '</div>'
      end
    end
    raw html
  end

  def active_nav?(nav)
    if nav.is_a?(Array)
      nav.include?(@main_nav) ? 'active' : ''
    else
      nav == @main_nav ? 'active' : ''
    end
  end
end
